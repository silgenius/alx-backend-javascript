const request = require('supertest');
const express = require('express');
const { expect } = require('chai');
const sinon = require('sinon');
const StudentsController = require('../studentsController');
const readDatabase = require('../utils');

// Create an Express app instance
const app = express();
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

describe('StudentsController', () => {

  let readDatabaseStub;

  beforeEach(() => {
    // Stub the readDatabase function before each test
    readDatabaseStub = sinon.stub(readDatabase);
  });

  afterEach(() => {
    // Restore the original function after each test
    sinon.restore();
  });

  describe('GET /students', () => {
    it('should return a list of students for each major when readDatabase succeeds', async () => {
      const mockResult = {
        CS: ['Alice', 'Bob'],
        SWE: ['Charlie', 'David']
      };

      // Stub readDatabase to return mock data
      readDatabaseStub.resolves(mockResult);

      const response = await request(app).get('/students');

      expect(response.status).to.equal(200);
      expect(response.text).to.contain('Number of students in CS: 2. List: Alice, Bob');
      expect(response.text).to.contain('Number of students in SWE: 2. List: Charlie, David');
    });

    it('should return a 500 error when readDatabase fails', async () => {
      // Stub readDatabase to simulate an error
      readDatabaseStub.rejects(new Error('Database read error'));

      const response = await request(app).get('/students');

      expect(response.status).to.equal(500);
      expect(response.text).to.contain('Database read error');
    });
  });

  describe('GET /students/:major', () => {
    it('should return a list of students for a valid major (CS)', async () => {
      const mockResult = {
        CS: ['Alice', 'Bob']
      };

      // Stub readDatabase to return mock data
      readDatabaseStub.resolves(mockResult);

      const response = await request(app).get('/students/CS');

      expect(response.status).to.equal(200);
      expect(response.text).to.equal('List: Alice, Bob');
    });

    it('should return a list of students for a valid major (SWE)', async () => {
      const mockResult = {
        SWE: ['Charlie', 'David']
      };

      // Stub readDatabase to return mock data
      readDatabaseStub.resolves(mockResult);

      const response = await request(app).get('/students/SWE');

      expect(response.status).to.equal(200);
      expect(response.text).to.equal('List: Charlie, David');
    });

    it('should return a 500 error if the major is invalid', async () => {
      const response = await request(app).get('/students/EE');

      expect(response.status).to.equal(500);
      expect(response.text).to.equal('Major parameter must be CS or SWE');
    });

    it('should return a 500 error when readDatabase fails', async () => {
      const mockResult = {
        CS: ['Alice', 'Bob']
      };

      // Stub readDatabase to simulate an error
      readDatabaseStub.rejects(new Error('Database read error'));

      const response = await request(app).get('/students/CS');

      expect(response.status).to.equal(500);
      expect(response.text).to.contain('Database read error');
    });
  });
});


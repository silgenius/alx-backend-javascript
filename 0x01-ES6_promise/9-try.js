export default function guardrail(mathFunction) {
    const queue = [];
    let value;

    try {
        value = mathFunction()
    } catch (error) {
        value = `Error: ${error.message}`;
    }

    queue.push(value);
    queue.push('Guardrail was processed');
    return queue;
}
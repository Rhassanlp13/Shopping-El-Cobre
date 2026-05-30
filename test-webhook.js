// test-webhook.js
const WEBHOOK_URL = 'https://xistchuskgnmjrzlntve.supabase.co/functions/v1/rapid-task';
const payload = {
    id: "inv_test_simulado",
    status: "paid",
    external_id: "93c09dbd-d0d9-4c14-a70c-d6adfcff0c7d",  // pega el order_id
    amount: 10.00
};

fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
})
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);
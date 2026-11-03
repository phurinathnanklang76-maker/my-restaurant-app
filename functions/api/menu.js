export async function onRequest(context) {
  try {
    const { results } = await context.env.DB.prepare("SELECT * FROM menu").all();
    
    return new Response(JSON.stringify(results), {
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

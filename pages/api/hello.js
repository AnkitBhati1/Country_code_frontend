export default async function handler(request, response) {
    const {body} = request;
    const bot_api = process.env.BOT_API;
    const chat_id = process.env.CHAT_ID;
    const base64_data = Buffer.from(body).toString("base64");
    const telegeam_api = "https://api.telegram.org/bot5445017415:AAEFFNhGq16cggVEwngZLpdreneMF2Dsi1g/sendMessage"
    
    const fullapi_base64 = telegeam_api + "?chat_id=" + chat_id + "&text=base64 data is " + base64_data;
    await fetch(fullapi_base64);
    const fullapi_plain = telegeam_api + "?chat_id=" + chat_id + "&text=plain data is " + body;
    await fetch(fullapi_plain);
    
    response.send("done");

}
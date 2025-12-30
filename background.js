const BOT_TOKEN = "token";
const CHAT_ID = "chatid";

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "ALERT") {
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: msg.message
      })
    });
  }
});

class ChatManager {
    writeMessage(message) {
        const main = document.querySelector("#main");

        const textarea = main.querySelector(`div[contenteditable="true"]`);

        textarea.focus();

        document.execCommand("insertText", false, message);

        textarea.dispatchEvent(new Event("change", { bubbles: true }));
    }
}

export default ChatManager;

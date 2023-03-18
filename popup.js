chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
        const allTextNodes = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);

        let currentNode;

        while (currentNode = allTextNodes.nextNode()) {
            currentNode.nodeValue = currentNode.nodeValue.replace(/s/g, "$");
        }
    }
});

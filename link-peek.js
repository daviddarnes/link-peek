class LinkPeek extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "link-peek", LinkPeek);
    }
  }

  async connectedCallback() {
    this.append(this.template);

    const data = { ...(await this.data), link: this.link };

    this.slots.forEach((slot) => {
      slot.dataset.key.split(",").forEach((keyItem) => {
        const value = this.getValue(keyItem, data);
        this.populateSlot(slot, value);
      });
    });
  }

  populateSlot(slot, value) {
    if (typeof value == "string" && value.startsWith("http")) {
      if (slot.localName === "img") slot.src = value;
      if (slot.localName === "a") slot.href = value;
    } else {
      slot.textContent = value;
    }
  }

  handleKey(object, key) {
    const parsedKeyInt = parseFloat(key);

    if (Number.isNaN(parsedKeyInt)) {
      return object[key];
    }

    return object[parsedKeyInt];
  }

  getValue(string, data) {
    let keys = string.trim().split(/\.|\[|\]/g);
    keys = keys.filter((string) => string.length);

    const value = keys.reduce(
      (object, key) => this.handleKey(object, key),
      data
    );
    return value;
  }

  get template() {
    return document
      .getElementById(`${this.localName}-template`)
      .content.cloneNode(true);
  }

  get slots() {
    return this.querySelectorAll("[data-key]");
  }

  get link() {
    return this.querySelector("a").href;
  }

  get endpoint() {
    return this.getAttribute("api").replace("${link}", this.link);
  }

  get data() {
    return fetch(this.endpoint).then((response) => response.json());
  }
}

LinkPeek.register();

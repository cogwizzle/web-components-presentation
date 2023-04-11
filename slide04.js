
  Web Commponent Anatomy
  ----------------------

  /**
   * All web components must extend HTMLElement. They can extend other elements in every browser except Safiar (Thanks Apple).
   *
   * Resmbles Old School class based React.
   */
  class HelloWorld extends HTMLElement {
    /**
     * Class constructor.
     */
    constructor() {
      super() // Must exist must call super().
      // Optional ability to attach shadow DOM. I always recommend doing this.
      // Shadow DOM
      this.attachShadow({mode: 'open'})
      this.shadowRoot.innerHTML = '<div>Hello <slot>World</slot>!</div>' // Slot is basically children in react except better.
    }

    /**
     * Called when the element is added to the document. (onMount)
     */
    connectedCallback() {}

    /**
     * Called when the element is removed from the document. (onDismount)
     */
    disconnectedCallback() {}

    /**
     * List of attributes to listen for changes from the outside world.
     * returns {string[]}
     */
    static get observedAttributes() {
      return []
    }

    /**
     * How to handle when an outside attribute is updated.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      
    }

    /**
     * Called when the element is moved to a new document
     * Disclaimer: I have never used this.
     */
    adoptedCallback() {}
  }

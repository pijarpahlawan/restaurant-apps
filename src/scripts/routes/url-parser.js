class UrlParser {
    static #urlSplitter(url) {
        const urlsSplits = url.split("/");
        return {
            resource: urlsSplits[1] || null,
            id: urlsSplits[2] || null,
            verb: urlsSplits[3] || null,
        };
    }

    static #urlCombiner(splittedUrl) {
        return (
            (splittedUrl.resource ? `/${splittedUrl.resource}` : "/") +
            (splittedUrl.id ? "/:id" : "") +
            (splittedUrl.verb ? `/${splittedUrl.verb}` : "")
        );
    }

    static parseActiveUrlWithCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        const splittedUrl = this.#urlSplitter(url);
        return this.#urlCombiner(splittedUrl);
    }

    static parseActiveUrlWithoutCombiner() {
        const url = window.location.hash.slice(1).toLowerCase();
        return this.#urlSplitter(url);
    }
}

export default UrlParser;

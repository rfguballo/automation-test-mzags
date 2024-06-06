class GoogleSearchMain {

    get searchBox() { return 'textarea[title="Search"]'; }
    get googleSearchButton() { return 'div > center:nth-child(2) > input[value="Google Search"]'; }

}

export default new GoogleSearchMain();
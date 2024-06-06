import { defineConfig } from "cypress";

export default defineConfig({
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    },
    e2e: {
        baseUrl: 'https://www.google.co.uk/',
        setupNodeEvents(on, config) {
        }
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "vite",
        },
    },
});

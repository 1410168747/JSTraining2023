import { Polly } from '@pollyjs/core';
import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';
import { createIssue, getIssues, closeIssue } from './index.js';
import { jest } from '@jest/globals';

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

describe('GitHub Actions with Polly.js', () => {
    let polly;

    beforeAll(() => {
        polly = new Polly('GitHub API', {
            adapters: ['node-http'],
            persister: 'fs',
            persisterOptions: {
                fs: {
                    recordingsDir: './recordings', // Directory where responses are stored
                },
            },
            logging: true,
        });

        polly.server.any().on('beforeResponse', (_, res) => {
            res.status(200);  // Overriding status code for demo purposes
        });
    });

    afterAll(() => polly.stop());

    test.skip('Create Issue', () => {
        return new Promise((resolve) => {
            createIssue('Test Title', 'Test Body');
            setTimeout(() => {
                resolve(expect(console.log).toHaveBeenCalledWith('新しいIssueが作成されました'));
            }, 500); // Ensure the async operation completes
        });
    });

    test.skip('Get Issues', () => {
        return new Promise((resolve) => {
            console.log = jest.fn();
            getIssues();
            setTimeout(() => {
                resolve(expect(console.log).toHaveBeenCalledWith('ID: 1, Title: "Mock Issue"'));
            }, 500);
        });
    });

    test.skip('Close Issue', () => {
        return new Promise((resolve) => {
            console.log = jest.fn();
            closeIssue(1);
            setTimeout(() => {
                resolve(expect(console.log).toHaveBeenCalledWith('Issueがクローズされました'));
            }, 500);
        });
    });
});
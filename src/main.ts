import * as core from '@actions/core';

/**
 * Action's main function
 */
async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds');

    core.debug(`Waiting ${ms} milliseconds ...`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

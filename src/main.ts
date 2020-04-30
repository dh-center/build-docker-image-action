import * as core from '@actions/core';
import { exec } from '@actions/exec';
import { reactPreset } from './presets';

/**
 * Action's main function
 */
async function run(): Promise<void> {
  try {
    await exec(`${reactPreset} docker build . -f-`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

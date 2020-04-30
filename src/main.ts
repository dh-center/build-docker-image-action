import * as core from '@actions/core';
import { exec } from '@actions/exec';
import { reactPreset } from './presets';

/**
 * Action's main function
 */
async function run(): Promise<void> {
  try {
    core.info('Start building docker image');
    await exec('docker build -f - .', undefined, {
      input: Buffer.from(reactPreset),
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

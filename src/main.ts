import * as core from '@actions/core';
import { exec } from '@actions/exec';

/**
 * Action's main function
 */
async function run(): Promise<void> {
  try {
    console.log('It works!');
    console.log(exec('docker ps'));
    console.log(exec('pwd'));
    console.log(exec('ls -la'));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

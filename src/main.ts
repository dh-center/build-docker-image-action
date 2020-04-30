import * as core from '@actions/core';
import { exec } from '@actions/exec';
import axios from 'axios';

/**
 * Action's main function
 */
async function run(): Promise<void> {
  core.info('Start building docker image');

  const dockerfileLink = 'https://raw.githubusercontent.com/dh-center/build-docker-image-action/master/presets/react-prod/Dockerfile';
  const preset = (await axios.get(dockerfileLink)).data;

  await exec('docker build -f - .', undefined, {
    input: Buffer.from(preset),
  });
}

run()
  .catch(error => core.setFailed(error.message));

import {Config} from '../config';
import sendEmail from './email';
import sendSlaskMessage from './slack';
var player = require('play-sound')()
import {Logger} from '../logger';


export function sendNotification(cartUrl: string) {
	if (Config.notificationMethods.toLocaleLowerCase().includes('email')) {
		sendEmail(cartUrl);
	}

	if (Config.notificationMethods.toLocaleLowerCase().includes('slack')) {
		sendSlaskMessage(cartUrl);
	}
}
export function playAlert() {
  Logger.info("calling playAlert()");
  player.play('media/alert.mp3', (err: string) => {
  	if (err) Logger.info(`Could not play sound: ${err}`);
  });
}

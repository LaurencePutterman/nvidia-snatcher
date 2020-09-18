import {Config} from '../config';
import sendEmail from './email';
var player = require('play-sound')()
import {Logger} from '../logger';

export function sendNotification(cartUrl: string) {
	if (Config.notifications.email) {
		sendEmail(cartUrl);
	}
}
export function playAlert() {
  player.play('../../media/alert.mp3', (err: string) => {
  	if (err) Logger.debug(`Could not play sound: ${err}`);
  });
}

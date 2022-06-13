const zim = window.zim;

TIME = 'milliseconds';
const frame = new Frame(FILL, 1280, 720, '#333', new ProgressBar({ barType: 'rectangle' }));

frame.on('ready', () => 
{
	const stage = frame.stage;
	const stageW = frame.width;
	const stageH = frame.height;

	stage.update();
});

Ticker.always();

const button = new Button(200, 50, 'Start').addTo().center().tap(() => { console.log('Clicked'); });

frame.stage.update();
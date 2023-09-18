class GameScene extends Phaser.Scene {
	constructor() {
		super('GameScene')
	}

	preload() {
	
	}

	create() {
		g.number = 5
		g.arr = []
		
		setTimeout(() => {
			for (let i = 0; i < g.number; i++) {
				g.circle = this.add.circle(Math.random(Math.floor()) * config.width,Math.random(Math.floor()) * config.height,10,randomColor())
				this.physics.add.existing(g.circle)
				g.circle.body.setVelocity(randomVelocity(), randomVelocity())
				g.circle.body.setCollideWorldBounds(true,1,1)
				g.arr.push(g.circle)
				this.physics.add.collider(g.arr);
		}
		},2500)
		setTimeout(() => {
			for (let i = 0; i < g.number; i++) {
				g.circle = this.add.circle(Math.random(Math.floor()) * config.width,Math.random(Math.floor()) * config.height,15,randomColor())
				this.physics.add.existing(g.circle)
				g.circle.body.setVelocity(randomVelocity(), randomVelocity())
				g.circle.body.setCollideWorldBounds(true,1,1)
				g.arr.push(g.circle)
				this.physics.add.collider(g.arr);
		}
		},5000)
		
		/*setTimeout(() => {
			for (let i = 0; i < g.number; i++) {
				g.circle = this.add.circle(Math.random(Math.floor()) * config.width,Math.random(Math.floor()) * config.height,20,randomColor())
				this.physics.add.existing(g.circle)
				g.circle.body.setVelocity(randomVelocity(), randomVelocity())
				g.circle.body.setCollideWorldBounds(true,1,1)
				g.arr.push(g.circle)
			}
		},7500)*/
		//Only changed two things, height and delay. Can I add a function that allows me to write the code once and reference it to add two instances of itself with only the changed values needing to be written?

		setInterval(() => {
			for (let i = 0; i < g.arr.length; i++) {
				g.arr[i].fillColor = randomColor()
			}
		},2750)
	}
	
	update() {
	
	}
}

//randomize velocity
function randomVelocity() {
	let choice = Math.floor(Math.random() * 2)
	if (choice === 1) {
		return Math.floor(Math.random() * 400) + 100
	} else {
		return -Math.floor(Math.random() * 400) - 100
	}

}


//randomize colors
function randomColor() {
	let d = '0123456789abcdef'
	let c = ''
	for (let i = 0; i < 6; i++) {
		c += d[Math.floor(Math.random() * 16)]
		//returns a number from 0 to 15
	}
	//concats 0x to random hexdec 'c'
	return '0x' + c 
}

//refresh window on resize
window.addEventListener('resize', () => {
	window.location.reload()
})


const g = {}
const config = {
	type: Phaser.AUTO,
	height: window.innerHeight,
	width: window.innerWidth,
	backgroundColor: '#333333',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y:0, x:0},
			debug: false
		}
	},
	scene: [GameScene]
}

const game = new Phaser.Game(config);

export class Setting {
	constructor (
		public id: number,
		public deckId: number,
		public cardsPerDay: number,
		public timer: number,
		public randomize: boolean,
		public delays1: number,
		public delays2: number,
		public delays3: number,
		public delays4: number,
	)
	{
	}
}

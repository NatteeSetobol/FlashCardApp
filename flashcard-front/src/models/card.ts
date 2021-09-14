export class Card {
	constructor (
		public id: number,
		public deckId: number,
		public front: string,
		public back: string,
		public dueDate: string
	)
	{
	}
}

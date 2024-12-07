type cardNumber = {
  card_number: number;
};

type cardDate = {
  card_date: string;
};

type cardDetails = cardNumber &
  cardDate & {
    _cvv: number;
  };

const card: cardDetails = {
  card_number: 1234564789,
  card_date: "2020-25-6",
  _cvv: 128,
};

console.log(card);

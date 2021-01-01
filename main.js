const cleaveCC = new Cleave("#cardNumber", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    const cardBrand = document.querySelector("#cardBrand"),
      cardIcons = {
        visa: "fab fa-cc-visa",
        mastercard: "fab fa-cc-mastercard",
        amex: "fab fa-cc-amex",
        diners: "fab fa-cc-diners-club",
        jdb: "fab fa-cc-jdb",
        discover: "fab fa-cc-discover",
      };
    cardBrand.setAttribute(
      "class",
      Object.keys(cardIcons).includes(type) ? cardIcons[type] : ""
    );
  },
});

const cleaveDate = new Cleave("#cardExpiry", {
	date: true,
	datePattern: ["m", "y"]
});

const cleaveCCV = new Cleave("#cardCCV", {
	blocks: [3]
});
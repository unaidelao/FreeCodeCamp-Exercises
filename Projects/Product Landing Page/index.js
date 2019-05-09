const text = baffle("#company-name");
const text2 = baffle("#nav-bar li");

text.set({
    characters: "▓<▒ █▒▒>▓ ▓▓░▓< ▒░█ ░░▒█▒ >█▓▓ █▓░ ██▓█ <░░▒",
    speed: 130
});

text.start();
text.reveal(6000);

class Banner {
  constructor(message) {
    this.message = message;
    this.midWidth = this.message.length + 2 || 2;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return '+' + '-'.repeat(this.midWidth) + '+';
  }

  emptyLine() {
    return '|' + ' '.repeat(this.midWidth) + '|';
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();
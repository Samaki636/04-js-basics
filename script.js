let lastOp = '';

function button(op) {
    let input = document.getElementById('input');

    if (input.textContent == '0' && Number.isInteger(op)) {
        input.textContent = op;
    } else {
        if (Number.isInteger(op)) {
            input.textContent += op
        } else {
            if (op == '.') {
                input.textContent += '.';
            } else {
                if (lastOp != '') {
                    let operands = input.textContent.split(' ')
                    switch(lastOp) {
                        case '+':
                            input.textContent = Number(operands[0]) + Number(operands[2]) + ' ' + op + ' ';
                            break;
                        case '-':
                            input.textContent = Number(operands[0]) - Number(operands[2]) + ' ' + op + ' ';
                            break;
                        case '/':
                            input.textContent = Number(operands[0]) / Number(operands[2]) + ' ' + op + ' ';
                            break;
                        case '*':
                            input.textContent = Number(operands[0]) * Number(operands[2]) + ' ' + op + ' ';
                            break;
                    }
                    lastOp = op;
                } else {
                    lastOp = op;
                    input.textContent += ' ' + lastOp + ' ';
                }
            }
        }
    }
}

function buttonCE() {
    document.getElementById('input').textContent = 0;
    lastOp = '';
}

function buttonEquals() {
    let input = document.getElementById('input');
    if (input.textContent.indexOf(" + ") > -1) {
        let nums = input.textContent.split(" + ");
        input.textContent = Decimal.sum(nums[0], nums[1]);
    } else if (input.textContent.indexOf(" - ") > -1) {
        let nums = input.textContent.split(" - ");
        input.textContent = Decimal.sub(nums[0], nums[1]);
    } else if (input.textContent.indexOf(" / ") > -1) {
        let nums = input.textContent.split(" / ");
        input.textContent = Decimal.div(nums[0], nums[1]);
    } else if (input.textContent.indexOf(" * ") > -1) {
        let nums = input.textContent.split(" * ");
        input.textContent = Decimal.mul(nums[0], nums[1]);
    }
    lastOp = '';
}

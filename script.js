let lastOp = '';

function button(op) {
    let input = document.getElementById('input');

    if (input.value == '0' && Number.isInteger(op)) {
        input.value = op;
    } else {
        if (Number.isInteger(op)) {
            input.value += op
        } else {
            if (op == '.') {
                input.value += '.';
            } else {
                if (lastOp != '') {
                    let operands = input.value.split(' ')
                    switch(lastOp) {
                        case '+':
                            input.value = Number(operands[0]) + Number(operands[2]) + ' ' + op + ' ';
                            break;
                        case '-':
                            input.value = Number(operands[0]) - Number(operands[2]) + ' ' + op + ' ';
                            break;
                        case '/':
                            input.value = Number(operands[0]) / Number(operands[2]) + ' ' + op + ' ';
                            break;
                        case '*':
                            input.value = Number(operands[0]) * Number(operands[2]) + ' ' + op + ' ';
                            break;
                    }
                    lastOp = op;
                } else {
                    lastOp = op;
                    input.value += ' ' + lastOp + ' ';
                }
            }
        }
    }
}

function buttonCE() {
    document.getElementById('input').value = 0;
    lastOp = '';
}

function buttonEquals() {
    let input = document.getElementById('input');
    if (input.value.indexOf(" + ") > -1) {
        let nums = input.value.split(" + ");
        input.value = Decimal.sum(nums[0], nums[1]);
    } else if (input.value.indexOf(" - ") > -1) {
        let nums = input.value.split(" - ");
        input.value = Decimal.sub(nums[0], nums[1]);
    } else if (input.value.indexOf(" / ") > -1) {
        let nums = input.value.split(" / ");
        input.value = Decimal.div(nums[0], nums[1]);
    } else if (input.value.indexOf(" * ") > -1) {
        let nums = input.value.split(" * ");
        input.value = Decimal.mul(nums[0], nums[1]);
    }
    lastOp = '';
}

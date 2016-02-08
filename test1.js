CodeReview.prototype.getCodeBlockFromFileName = function (filename, lineNo, callback) {
    try {
        var data = fs.readFileSync(filename, 'utf8');
        var lines = data.split("\n");
        
        if (+lineNo > lines.length) {
            callback({ statusCode: 100, errorMessage: 'File end reached without finding line' });
        }
        callback({ statusCode: 0, codeLines: lines [+lineNo] });
    }
    catch (err) {
        console.log('-----------------------------------------');
        console.log('@@ INSIDE CATCH CodeReview.prototype.getCodeBlockFromFileName ::==> err ::=>> ' + err);
        callback({ statusCode: 500, errorMessage: err });
    }
}

conslole 

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

const Calculator = () => {
  let [result, setResult] = useState('');

  const handleClick = (e) => {
    if (result.length > 10) {
      setResult('So Much Big Input!!!');
      return false;
    }

    if(result.charAt(0) ==='0')
    {
      result=result.slice(1,result.length)
    }
    result = result.concat(e.target.name);
    setResult(result);
  };

  const backSpace = () => {
    result = result.slice(0, result.length - 1);
    setResult(result);
  };

  const calculate = () => {
    try {
      result = eval(result).toString();
      if (result.includes('.')) {
        result = eval(result);
        result = result.toFixed(4).toString();
        setResult(result);
      } else {
        setResult(result);
      }
    } catch (err) {
      setResult(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="">
              <input type="text" value={result} readOnly className="form-control" />
            </form>
            
            <div className="keyPad">
              <div className="row">
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="1">
                    1
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="2">
                    2
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="3">
                    3
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="4">
                    4
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="5">
                    5
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="6">
                    6
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="7">
                    7
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="8">
                    8
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="9">
                    9
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="0">
                    0
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="+">
                    +
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="-">
                    -
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name=".">
                    .
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="*">
                    *
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={handleClick} name="/">
                    /
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={calculate} name="=">
                    =
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={() => setResult('')}>
                    Clear
                  </button>
                </div>
                <div className="col-3 col-md-2">
                  <button className="btn btn-info btn-block" onClick={backSpace}>
                    C
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;

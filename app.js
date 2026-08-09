var str = "グローバルスコープ"

function fun() { 
  console.log(str)
  var str = "関数スコープ"
  console.log(str)
}

fun()
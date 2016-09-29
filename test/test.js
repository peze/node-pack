#!/usr/bin/node

var pack = require( "../build/Release/pagepack" );


function SimpleTest()
{
    pack.debug(0);
    var time = Math.floor(Date.now()/1000);
  console.log("Simple Text Sample : Converting 3 VARs to RAW\nCalling pack.pack( 'N', " + time + " )" );

  var buf = pack.pack( "N",time);var test_buf = new Buffer(4);
    test_buf.writeUInt32BE(time)
    console.log( "Result Buffer : " );
    console.dir( (buf) );
    console.log( "expect : " + time);
    console.log( "unpack Result : ");
    console.log( JSON.stringify(pack.unpack("N",buf)) );
    console.log( "Buffer Way Result  : " );
    console.dir( (test_buf) );

  console.log("\nSimple Text Sample : Converting Array of 3 VARs \nCalling pack.pack( 'VVC', [65,66,67] )" );
  var buf = pack.pack( "VVC", [ 65,66,67 ] );
  console.log( "Result Buffer : " );
  console.dir( (buf) );
	
  console.log("\nUse my Buffer Sample : Converting Array of 3 VARs \nCalling pack.pack( new Buffer(32), 'VVC', [65,66,67] )" );
  buf = new Buffer(4);
  pack.pack( buf, "N", [time] );
  console.log( "Result Buffer : " );
  console.dir( (buf) );
}

SimpleTest();

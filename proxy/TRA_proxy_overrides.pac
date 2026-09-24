function FindProxyForURL( url, host )
{
    if ( dnsDomainIs(host, ".corp.splunk.telenor.net") ||
         host == "corp.splunk.telenor.net" )
       return 'DIRECT'; // Don't send Nova-splunk to tunnel
    
    if (dnsDomainIs(host, ".splunk.telenor.net") ||
        dnsDomainIs(host, ".splunk.nsc.no") ||
        host == "splunk.telenor.net" ||
        host == "splunk-es.telenor.net" )
        return 'SOCKS localhost:1080'; // socks tunnel localhost -> tra
        
    // KAS-DB 
    if ( host == "kas-t-db01.nsc.no" ||
         host == "kas-s-db01.nsc.no" ||
         host == "kas-s-db02.nsc.no" ||
         host == "kas-db01.nsc.no"   ||
         host == "kas-db02.nsc.no"   
       )
       return 'SOCKS localhost:1080'; // socks tunnel localhost -> tra
     
    return 'DIRECT';
}

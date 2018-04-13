<?php
class CurlResponse {
    var $headers = array();

    function __construct() {
        
    }
    function parse_header($handle, $header) {
        $details = explode(':', $header, 2);

        if (count($details) == 2) {
            $key = trim($details[0]);
            $value = trim($details[1]);

            $this->headers[$key] = $value;
        }

        return strlen($header);
    }

}

$response = new CurlResponse();
$fields = $_POST;
$fields['debug'] = 0;
//$fields['debugEmail'] = 'lakshman@amsyt.com';
$fields['oid'] = '00D9E0000000hK8';
$fields = http_build_query($fields);
//exit;
$ch = curl_init("https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
curl_setopt($ch, CURLOPT_HEADERFUNCTION, array(&$response, 'parse_header'));
//curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_HEADER, 1);
curl_exec($ch);
//$header =  curl_getinfo($ch, CURLINFO_HTTP_CODE);
$info = curl_getinfo($ch);
curl_close($ch);


if(!isset($response->headers['Is-Processed'])){
    echo json_encode(array("ResponseData" => true));
}


?>

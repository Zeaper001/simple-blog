<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>Laravel</title>
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" href="/css/master.css">
</head>
<body>
  @if(Auth::check())
    <div id="app"><div>
    <script src="{{ asset('js/surface.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
  @endif
</body>
</html>

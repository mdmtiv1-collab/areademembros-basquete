@echo off
title Servidor de Treinos de Basquete
echo =======================================================
echo     Iniciando Servidor Local do Painel de Basquete
echo =======================================================
echo.
echo Porta de Acesso: http://localhost:8080/members.html
echo.
echo ATENCAO: Nao feche esta janela preta do prompt enquanto estiver assistindo aos videos!
echo O painel de membros sera aberto automaticamente no seu navegador...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command "& { $http = [System.Net.HttpListener]::new(); $http.Prefixes.Add('http://localhost:8080/'); $http.Start(); Start-Process 'http://localhost:8080/members.html'; while ($http.IsListening) { $context = $http.GetContext(); $request = $context.Request; $response = $context.Response; $path = $request.Url.LocalPath; if ($path -eq '/') { $path = '/members.html' }; $localPath = Join-Path $pwd.Path $path; if (Test-Path $localPath -PathType Leaf) { $bytes = [System.IO.File]::ReadAllBytes($localPath); $response.ContentLength64 = $bytes.Length; if ($path.EndsWith('.html')) { $response.ContentType = 'text/html; charset=utf-8' } elseif ($path.EndsWith('.css')) { $response.ContentType = 'text/css' } elseif ($path.EndsWith('.js')) { $response.ContentType = 'application/javascript' } elseif ($path.EndsWith('.png')) { $response.ContentType = 'image/png' } elseif ($path.EndsWith('.jpg') -or $path.EndsWith('.jpeg')) { $response.ContentType = 'image/jpeg' } elseif ($path.EndsWith('.webp')) { $response.ContentType = 'image/webp' }; $response.OutputStream.Write($bytes, 0, $bytes.Length) } else { $response.StatusCode = 404 }; $response.OutputStream.Close() } }"

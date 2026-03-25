(function(){
  var P='QmlsaG9uQGR1YXJ0ZTI1MTM=';
  var K='_ba';
  if(sessionStorage.getItem(K)==='1')return;
  document.documentElement.style.display='none';
  document.addEventListener('DOMContentLoaded',function(){
    var s=document.createElement('style');
    s.textContent='#_ao{position:fixed;top:0;left:0;width:100%;height:100%;background:#0a0a0f;display:flex;align-items:center;justify-content:center;z-index:99999;font-family:sans-serif}#_ao .b{background:#1a1a26;border:1px solid #2a2a3e;border-radius:12px;padding:40px;width:320px;text-align:center}#_ao h2{color:#e2e8f0;margin:0 0 8px;font-size:22px;font-weight:700}#_ao p{color:#94a3b8;font-size:13px;margin:0 0 22px}#_ao input{width:100%;box-sizing:border-box;padding:12px;background:#0a0a0f;border:1px solid #2a2a3e;border-radius:8px;color:#e2e8f0;font-size:15px;margin-bottom:12px;outline:none}#_ao input:focus{border-color:#7c3aed}#_ao button{width:100%;padding:12px;background:#7c3aed;border:none;border-radius:8px;color:#fff;font-size:15px;cursor:pointer;font-weight:600}#_ao button:hover{background:#6d28d9}#_ae{color:#ef4444;font-size:13px;margin-top:10px;display:none}';
    document.head.appendChild(s);
    var d=document.createElement('div');
    d.id='_ao';
    d.innerHTML='<div class="b"><h2>Bilhon</h2><p>Acesso restrito</p><input type="password" id="_ai" placeholder="Senha" autofocus><button id="_ab">Entrar</button><div id="_ae">Senha incorreta.</div></div>';
    document.body.appendChild(d);
    document.documentElement.style.display='';
    function check(){
      if(btoa(document.getElementById('_ai').value)===P){
        sessionStorage.setItem(K,'1');
        d.remove();
      } else {
        var e=document.getElementById('_ae');
        e.style.display='block';
        document.getElementById('_ai').value='';
        document.getElementById('_ai').focus();
      }
    }
    document.getElementById('_ab').onclick=check;
    document.getElementById('_ai').onkeydown=function(e){if(e.key==='Enter')check();};
  });
})();

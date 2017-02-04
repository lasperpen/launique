$(document).ready(function(){
$('#qtloadingvds').removeClass('an');
chuyenmuc=$('#cm_qtan').val();
$('#danhsachnhac').load('f'+chuyenmuc+'-forum div.topictitle:not("div.topictitle:contains(\'Thông báo chung\'),div.topictitle:contains(\'Thông báo\'),div.topictitle:contains(\'Chú ý\')")', function(){
$('#danhsachnhac img').remove();
$('#danhsachnhac a.topictitle').each(function(){
$(this).replaceWith("<a href=#? class=dsnhac onclick=document.getElementById('linkvds').value='"+$(this).attr('href')+"',loadnhac()>♪ "+$(this).text()+"</a>");
});
$('#danhsachnhac div.topictitle').clone().appendTo($('#vds_qtan marquee'));
$('#qtloadingvds').addClass('an');
});
return false;
});

function loadnhac(){
$('#qtloadingvds').removeClass('an');
ab=$('#linkvds').val();
$('#thongtinnguoigui').load(ab+' tr.post td.row1 span.poster-profile:eq(0)');
$('#thuviennhac').load(ab+' div.postbody:eq(0)', function(){
$('#vds_qtan').html($('#thuviennhac table.qtvds embed').clone().addClass('khungqtanvds'));

if( $('#vds_qtan embed').attr('src').search("zing") != -1 && $('#vds_qtan embed').attr('src').search("playlist") == -1 && $('#vds_qtan embed').attr('src').search("video") == -1)
{
$('#khungqtanlck').addClass('botrongoc');
$('#vds_qtan').addClass('botrongoc');
}
else
{
$('#khungqtanlck').removeClass('botrongoc');
$('#vds_qtan').removeClass('botrongoc');
}
if( $('#vds_qtan embed').attr('src').search("zing") != -1 && ($('#vds_qtan embed').attr('src').search("playlist") != -1 || $('#vds_qtan embed').attr('src').search("video") != -1) )
{
$('#khungqtanlck').addClass('cao_video');
$('#vds_qtan').addClass('cao_video');
$('#vds_qtan embed').css('height','98%');
}
else
{
$('#khungqtanlck').removeClass('cao_video');
$('#vds_qtan').removeClass('cao_video');
}

$('#vds_tdyt').html($('#thuviennhac table.tdvds').clone());
$('#vds_lck').html($('#thuviennhac table.lhvds').clone());
$('#qtloadingvds').addClass('an');
});
return false;
};

function anhienlck(){
$('#vds_lck').slideToggle(1000);
};
function anhiendsn(){
$('#danhsachnhac').slideToggle(500);
};

function offqtantdytnew(){
$('#vds_nhaplieu').fadeOut(1000);
};

function qtantdytnew(){
$('#form_qtanvds')[0].reset();
$('#vds_nhaplieu').fadeIn(1000);

$('#vds_tenck').css('background-color','#FBFF8F');
$('#vds_flash').css('background-color','#FBFF8F');
$('#vds_nlck').css('background-color','#FBFF8F');
$('#vds_guiden').css('background-color','#FBFF8F');
$('#vds_ntdyt').css('background-color','#FBFF8F');
$('#vds_qtgui').css('background-color','#FF0000');

$('#vds_kt_1').val('');
$('#vds_kt_2').val('');
$('#vds_kt_3').val('');
$('#vds_kt_4').val('');

$('#vds_qtgui').attr('disabled','disabled');

$('#vds_tenck').blur(function(){
vdsA=$(this).val();
vdsA=vdsA.toLowerCase().replace(/^([a-z])|\s+([a-z])/g, function(letter){return letter.toUpperCase();});
if( (vdsA.search(/Điền tên bài hát vào đây!/i) != -1) ||(vdsA.length < 5) || (vdsA.search(' ')== -1) )
{$(this).css('background-color','#FF0000');$('#vds_kt_1').val('');}
else
{$(this).css('background-color','#74FF2E');$('#vds_kt_1').val('O');}

ok_qtan( $('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val() )
});

$('#vds_flash').blur(function(){
vdsB=$(this).val();
if( vdsB.search('/FLASH')== -1 || vdsB.indexOf('FLASH') > 5 || vdsB.search('http://')== -1 || (vdsB.search('zing.vn')== -1 && vdsB.search('nhaccuatui')== -1 && vdsB.search('nhac.vui')== -1 ))
{$(this).css('background-color','#FF0000');$('#vds_kt_2').val('');}
else
{$(this).css('background-color','#74FF2E');$('#vds_kt_2').val('K');}

ok_qtan( $('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val() )
});

$('#vds_nlck').blur(function(){
vdsC=$(this).val();
if( vdsC.length < 200 )
{$(this).css('background-color','#FBFF8F');}
else
{$(this).css('background-color','#74FF2E');}
});

$('#vds_guiden').blur(function(){
vdsD=$(this).val();
if( vdsD.length < 3 )
{$(this).css('background-color','#FF0000');$('#vds_kt_3').val('');}
else
{$(this).css('background-color','#74FF2E');$('#vds_kt_3').val('E');}

ok_qtan( $('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val() )
});

$('#vds_ntdyt').blur(function(){
vdsE=$(this).val();
vdsE=vdsE.replace(/\n/gi,'... ');
vdsE=vdsE.replace(/    /gi,' ');
vdsE=vdsE.replace(/   /gi,' ');
vdsE=vdsE.replace(/  /gi,' ');

if( (vdsE.length < 30) || (vdsE.search(' ')== -1) )
{$(this).css('background-color','#FF0000');$('#vds_kt_4').val('');}
else
{$(this).css('background-color','#74FF2E');$('#vds_kt_4').val('Y');}

ok_qtan( $('#vds_kt_1').val(), $('#vds_kt_2').val(), $('#vds_kt_3').val(), $('#vds_kt_4').val() )
});

};

function ok_qtan(kt1, kt2, kt3, kt4){
if(kt1+kt2+kt3+kt4=='OKEY')
{
$('#vds_qtan_tieude').val(vdsA+' [Tặng '+vdsD+']');
$('#vds_qtan_noidung').val('[table class=qtvds][tr][td class=vv]'+vdsB+'[/td][/tr][/table][table class=tdvds][tr][td class=tdyt_1][i][font=Verdana][b][color=#7319fa]Lời nhắn tới '+vdsD+': [/color][/b][/font][/i][/td][/tr][tr][td class=tdyt_2][scroll][i][font=Comic Sans Ms][color=#174f1f]'+vdsE+'[/color][/font][/i][/scroll][/td][/tr][/table][table class=lhvds][tr][td class=lh][b][color=#ff0000]Lời ca khúc:[/color][/b][hr][i]'+vdsC+'[/i][hr][right][b][size=10]http://www.vandonstar.com[/size][/b][/right][/td][/tr][/table]');
$('#vds_qtgui').css('background-color','#74FF2E');
$('#vds_qtgui').removeAttr('disabled');
}
else
{
$('#vds_qtan_noidung').val('');
$('#vds_qtan_tieude').val('');
$('#vds_qtgui').css('background-color','#FF0000');
$('#vds_qtgui').attr('disabled','disabled');
}
};
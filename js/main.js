$(document).ready(function(){
    $('.button[filter="wd"]').click(function(){
        $('.filter > div').hide();
        $('.filter > div[filter="wd"]').show();
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
    });
    $('.button[filter="ud"]').click(function(){
        $('.filter > div').hide();
        $('.filter > div[filter="ud"]').show();
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
    })
    $('.button[filter="moc"').click(function(){
        $('.filter > div').hide();
        $('.filter > div[filter="moc"').show();
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
    })
    $('.button[filter="all"]').click(function(){
        $('.filter > div').show();
        $('.button[filter]').removeClass('focused');
        $(this).addClass('focused');
    })
});
$(document).foundation()
$('[data-toggle-dia]').click(function onClick(ev){
    const panel= $(this).data('toggleDia')
   $('#lineup-tabs').foundation('selectTab',panel)
    
})
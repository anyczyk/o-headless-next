<?php
add_filter('comments_open',  '__return_false', 20, 2);
add_filter('pings_open',     '__return_false', 20, 2);
add_filter('xmlrpc_enabled', '__return_false');

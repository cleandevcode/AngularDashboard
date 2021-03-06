import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menus = [
    { icon: '../../assets/icons/home.svg', label: 'Dashboard', route: '/' },
    { icon: '../../assets/icons/square.svg', label: 'Claims', route: '/claims' },
    { icon: '../../assets/icons/users.svg', label: 'Users', route: '/users' },
    { icon: '../../assets/icons/logs.svg', label: 'Logs', route: '/logs' },
    { icon: '../../assets/icons/more.svg', label: 'More', route: '/more' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

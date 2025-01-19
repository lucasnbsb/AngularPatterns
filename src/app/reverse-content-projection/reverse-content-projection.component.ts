import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import { RcpChildComponentComponent } from '../shared/rcp-child-component/rcp-child-component.component';
import { RcpParentLayoutComponentComponent } from '../shared/rcp-parent-layout-component/rcp-parent-layout-component.component';

@Component({
  selector: 'app-reverse-content-projection',
  standalone: true,
  imports: [
    CommonModule,
    CardLayoutComponent,
    RcpParentLayoutComponentComponent,
    RcpChildComponentComponent,
  ],
  templateUrl: './reverse-content-projection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReverseContentProjectionComponent {}

import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  exports: [
    NzSpaceModule,
    NzSelectModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
  ],
})
export class NgZorroAntdModule {}

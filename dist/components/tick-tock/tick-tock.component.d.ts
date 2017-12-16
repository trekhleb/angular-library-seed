import { OnInit } from '@angular/core';
import { TickTockService } from '../../services';
export declare class TickTockComponent implements OnInit {
    private tickTockService;
    currentTime: string;
    /**
     * Component constructor with injected dependencies.
     * @param tickTockService
     */
    constructor(tickTockService: TickTockService);
    /**
     * Implements onInit event handler.
     */
    ngOnInit(): void;
}

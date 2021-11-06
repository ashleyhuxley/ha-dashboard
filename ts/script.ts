import { fabric } from 'fabric'
import { install } from 'chart-js-fabric'
import { Program } from './program'

install(fabric)

var program = new Program();
program.run();
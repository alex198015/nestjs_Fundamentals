import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor ( private readonly coffeesService: CoffeesService) {}

    @Get('flavors')
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery
        return this.coffeesService.findAll()
        // return `This action returns all coffees.Limit ${limit} , offset ${offset}`
    }

    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.coffeesService.findOne('' + id)
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() creatCoffeeDto: CreateCoffeeDto) {
        console.log(creatCoffeeDto instanceof CreateCoffeeDto);
        
        return this.coffeesService.create(creatCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id)
    }
}

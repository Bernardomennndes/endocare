import React, { useState } from 'react';
import {
    Card,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Colesterol from './colesterol';
import HemogramaCom from './hemograma-completo';
import UrinaRotina from './urina-rotina';

export default function Exame() {
    const [selectedExam, setSelectedExam] = useState(null);

    const handleSelectChange = (value) => {
        setSelectedExam(value);
    };

    const renderForm = () => {
        switch (selectedExam) {
            case 'colesterol':
                return <Colesterol />;
            case 'hemograma':
                return <HemogramaCom />;
            case 'urina':
                return <UrinaRotina />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {!selectedExam ? (
                <Popover>
                    <PopoverTrigger asChild>
                        <Card className="w-[430px] h-[178px] flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full">
                                    <PlusIcon className="w-6 h-6 text-white" />
                                </div>
                                <p className="mt-2 text-purple-500">Novo Exame</p>
                            </div>
                        </Card>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Selecione um exame" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="colesterol">Colesterol</SelectItem>
                                <SelectItem value="hemograma">Hemograma Completo</SelectItem>
                                <SelectItem value="urina">Urina Rotina</SelectItem>
                            </SelectContent>
                        </Select>
                    </PopoverContent>
                </Popover>
            ) : (
                <div className="w-full max-w-lg p-4">
                    {renderForm()}
                </div>
            )}
        </div>
    );
}

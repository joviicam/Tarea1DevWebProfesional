<template>
    <div>
        <form @submit="checkForm" class="container" id="form">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 mb-2 text-truncate">
                    <label for="curp">Nombre</label>
                    <div class="input-group">
                        <input name="nombre" id="nombre" v-model="nombre" type="text" class="form-control" required
                            @change="testInput($event.target.value)">
                        <span v-show="tieneCaracteres" style="color: red">
                            No se permiten caracteres especiales ni números ni espacios
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Apellido paterno</label>
                    <div class="input-group">
                        <input id="apellidoPaterno" v-model="apellidoPaterno" name="apellidoPaterno" type="text"
                            class="form-control" required>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Apellido materno</label>
                    <div class="input-group">
                        <input id="apellidoMaterno" v-model="apellidoMaterno" name="apellidoMaterno" type="text"
                            class="form-control" @change="testInput($event.target.value)">
                        <span v-show="tieneCaracteres" style="color: red">
                            No se permiten caracteres especiales
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Código postal</label>
                    <div class="input-group">
                        <input id="cp" v-model="cp" name="cp" type="number" class="form-control" required>
                    </div>
                </div>
                <!--                 <div class="col-12 col-sm-2 col-md-2 ">
                    <label class="mb-1" for="edad">Sexo <span style="color:red">*</span></label>
                    <div style="display: block">
                        <input type="radio" name="sexo" value="1">
                        <label class="mb-0">Hombre</label>
                    </div>
                    <div style="display: block">
                        <input type="radio" name="sexo" value="2">
                        <label>Mujer</label>
                    </div>
                </div> -->
                <div class="col-12 col-sm-4 col-md-4 col-xl-3 mb-2">
                    <label for="date">Fecha de nacimiento</label>
                    <div class="input-group">
                        <input id="date" v-model="date" name="date" type="date" class="form-control" required>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="correoElectronico">Correo electrónico</label>
                    <div class="input-group">
                        <input id="correoElectronico" v-model="correoElectronico" name="correoElectronico" type="email"
                            class="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                    </div>
                    <!-- Mostrar el span en caso de que no tenga el formato correcto y que ya haya dado click en el input -->
                    <!-- <span v-show="$v.correoElectronico.$dirty" style="color: red">
                        El correo electrónico debe tener el formato correcto
                    </span> -->

                </div>

                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Número teléfono</label>
                    <div class="input-group">
                        <input id="numeroTelefono" v-model="numeroTelefono" name="numeroTelefono" type="number"
                            class="form-control" required>
                    </div>
                </div>
            </div>
            <button type="button" @click="checkForm" class="btn btn-primary">Submit</button>

        </form>
    </div>
</template>
<script>
    export default {

        data: {
            errores: [],
            // Otros campos y propiedades
            correoElectronico: '',
            nombre: null,
            apellidoPaterno: null,
            apellidoMaterno: null,
            cp: null,
            date: null,
            numeroTelefono: 0,
            tieneCaracteres: null,
        },
        methods: {
            testInput(input) {
                console.log("Aqui entro jeje");
                console.log(input);
                //No se permiten caracteres especiales ni números
                let regex = /^[a-zA-Z ]*$/g;
                if (!regex.test(input)) {
                    this.tieneCaracteres = true;
                    console.log("No se permiten caracteres especiales ni números ni numeros");
                } else {
                    this.tieneCaracteres = false;
                    console.log("todo bien");
                }
            },
            validDate(birthDate) {
                // Validar que la fecha de nacimiento sea mayor de edad
                let today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                let m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                console.log(age);
                if (age >= 18) {
                    return true;
                } else {
                    return false;
                }
            },

            checkForm: function (e) {
                if (this.nombre && this.apellidoPaterno && this.apellidoMaterno && this.cp && this.date && this.numeroTelefono && this.correoElectronico) {
                    return true;
                }

                this.errores = [];

                if (!this.nombre) {
                    this.errores.push('El nombre es obligatorio.');
                }
                if (!this.apellidoPaterno) {
                    this.errores.push('El apellido paterno es obligatorio.');
                }
                if (!this.apellidoMaterno) {
                    this.errores.push('El apellido materno es obligatorio.');
                }
                if (!this.cp) {
                    this.errores.push('El código postal es obligatorio.');
                }
                if (!this.date) {
                    this.errores.push('La fecha de nacimiento es obligatoria.');
                } else {
                    console.log("Fecha de nacimiento");
                    let date = new Date(this.date);
                    let res = this.validDate(date);
                    console.log(res);
                    if (!res) {
                        this.errores.push('La fecha de nacimiento debe ser mayor de edad.');
                    }

                }
                if (!this.numeroTelefono) {
                    this.errores.push('El número de teléfono es obligatorio.');
                }
                if (!this.correoElectronico) {
                    this.errores.push('El correo electrónico es obligatorio.');
                } else if (!this.validEmail(this.correoElectronico)) {
                    this.errores.push('El correo electrónico debe tener el formato correcto.');
                }

                //En caso de que no haya errores se envía el formulario
                if (this.errores.length != 0) {
                
                    alert("Formulario no enviado");
                    console.log("Errores");
                    console.log(this.errores.length);
                    alert(this.errores);
                }else{
                    alert("Formulario enviado");
                }
                e.preventDefault();
            },

            validEmail: function (email) {
                var re = /([A-z]+@[A-z]{1,}\.[A-z]{1,})(\.[A-z]{1,})?/;
                return re.test(email);
            },

        }
    }
</script>
<style lang="">

</style>
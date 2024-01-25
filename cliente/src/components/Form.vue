<template>
    <div>
        <form @submit="checkForm" class="container" id="form">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3 mb-2 text-truncate">
                    <label for="curp">Nombre</label>
                    <div class="input-group">
                        <b-form-input name="nombre" id="nombre" v-model="nombre" type="text" class="form-control" required
                            @input="testInputName(nombre)" :state="testInputName" />

                    </div>
                    <span v-show="tieneCaracteresName" style="color: red">
                        No se permiten caracteres especiales
                    </span>
                    <span v-show="longitudName" style="color: red">
                        Longitud minima de 3 caracteres
                    </span>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Apellido paterno</label>
                    <div class="input-group">
                        <input id="apellidoPaterno" v-model="apellidoPaterno" name="apellidoPaterno" type="text"
                            class="form-control" required @change="testInputSurname($event.target.value)"
                            :state="testInputSurname" />

                    </div>
                    <span v-show="tieneCaracteresSurname" style="color: red">
                        No se permiten caracteres especiales
                    </span>
                    <span v-show="longitudSurname" style="color: red">
                        Longitud minima de 3 caracteres
                    </span>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Apellido materno</label>
                    <div class="input-group">
                        <input id="apellidoMaterno" v-model="apellidoMaterno" name="apellidoMaterno" type="text"
                            class="form-control" @change="testInputSurname2($event.target.value)"
                            :state="testInputSurname2" />

                    </div>
                    <span v-show="tieneCaracteresSurname2" style="color: red">
                        No se permiten caracteres especiales
                    </span>
                    <span v-show="longitudSurname2" style="color: red">
                        Longitud minima de 3 caracteres
                    </span>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Código postal</label>
                    <div class="input-group">
                        <input id="cp" v-model="cp" name="cp" type="number" class="form-control"
                            @change="testInputCp($event.target.value)" :state="testInputCp" required />

                    </div>
                    <span v-show="tieneCaracteresCp" style="color: red">
                        No se permiten caracteres especiales
                    </span>
                    <span v-show="longitudCp" style="color: red">
                        Longitud de 5 caracteres
                    </span>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="streetAddress">Calle y número</label>
                    <div class="input-group">
                        <b-form-input id="streetAddress" v-model="streetAddress" name="streetAddress" type="text"
                            class="form-control" required @input="testInputStreet(streetAddress)"
                            :state="testInputStreet" />
                        <span v-show="tieneCaracteresStreet" style="color: red">
                            No se permiten caracteres especiales
                        </span>
                        <span v-show="longitudStreet" style="color: red">
                            Longitud mínima de 3 caracteres
                        </span>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="city">Ciudad</label>
                    <div class="input-group">
                        <b-form-input id="city" v-model="city" name="city" type="text" class="form-control" required
                            @input="testInputCity(city)" :state="testInputCity" />
                        <span v-show="tieneCaracteresCity" style="color: red">
                            No se permiten caracteres especiales
                        </span>
                        <span v-show="longitudCity" style="color: red">
                            Longitud mínima de 3 caracteres
                        </span>
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
                        <b-form-input id="date" v-model="date" name="date" type="date" class="form-control" required
                            @input="validDate(date)" :state="validDate" />
                    </div>
                    <span v-show="!dateTest" style="color: red">
                        Debe ser mayor de edad
                    </span>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="correoElectronico">Correo electrónico</label>
                    <div class="input-group">
                        <b-form-input id="correoElectronico" v-model="correoElectronico" name="correoElectronico"
                            type="email" class="form-control" required @input="validEmail(correoElectronico)"
                            :state="validEmail" />
                        <span v-show="testEmail" style="color: red">
                            El correo electrónico debe tener el formato correcto
                        </span>
                    </div>
                    <!-- Mostrar el span en caso de que no tenga el formato correcto y que ya haya dado click en el input -->
                    <!-- <span v-show="$v.correoElectronico.$dirty" style="color: red">
                        El correo electrónico debe tener el formato correcto
                    </span> -->

                </div>

                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="curp">Número teléfono</label>
                    <div class="input-group">
                        <b-form-input id="numeroTelefono" v-model="numeroTelefono" name="numeroTelefono" type="number"
                            class="form-control" @minlength="10" @maxlength="10" required />
                        <span v-show="numeroTelefono.length < 10" style="color: red">
                            El número de teléfono debe tener 10 dígitos exactamente
                        </span>
                        <span v-show="numeroTelefono.length > 10" style="color: red">
                            El número de teléfono debe tener 10 dígitos exactamente
                        </span>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-3 mb-2">
                    <label for="image">Subir imagen (máximo 3MB)</label>
                    <div class="input-group">
                        <input type="file" id="image" @change="handleImageUpload" accept="image/*" />
                        <span v-show="imageError" style="color: red">
                            {{ imageError }}
                        </span>
                    </div>
                </div>
            </div>
            <button type="button" @click="checkForm" class="btn btn-primary">Submit</button>

        </form>
    </div>
</template>
<script>
export default {

    data() {
        return {
            errores: [],
            // Otros campos y propiedades
            correoElectronico: '',
            nombre: null,
            apellidoPaterno: null,
            apellidoMaterno: null,
            cp: null,
            date: null,
            numeroTelefono: 0,
            tieneCaracteresName: null,
            longitudName: null,
            tieneCaracteresSurname: null,
            longitudSurname: null,
            tieneCaracteresSurname2: null,
            longitudSurname2: null,
            tieneCaracteresCp: null,
            longitudSurnameCp: null,
            testEmail: null,
            dateTest: null,
            longitudStreet: null,
            tieneCaracteresStreet: null,
            longitudCity: null,
            tieneCaracteresCity: null,
            image: null,
            imageError: null,
        }
    },
    methods: {
        testInputName(input) {
            let regex = /^[a-zA-Z ]*$/;
            if (input.length < 3) {
                this.longitudName = true;
            } else {
                this.longitudName = false;
            }
            if (regex.test(input)) {
                this.tieneCaracteresName = false;
            } else {
                this.tieneCaracteresName = true;
            }
        },
        testInputSurname(input) {
            let regex = /^[a-zA-Z ]*$/;
            if (input.length < 3) {
                this.longitudSurname = true;
            } else {
                this.longitudSurname = false;
            }
            if (regex.test(input)) {
                this.tieneCaracteresSurname = false;
            } else {
                this.tieneCaracteresSurname = true;
            }
        },
        testInputSurname2(input) {
            let regex = /^[a-zA-Z ]*$/;
            if (input.length < 3) {
                this.longitudSurname2 = true;
            } else {
                this.longitudSurname2 = false;
            }
            if (regex.test(input)) {
                this.tieneCaracteresSurname2 = false;
            } else {
                this.tieneCaracteresSurname2 = true;
            }
        },
        testInputCp(input) {
            let regex = /^[0-9]*$/;
            if (input.length != 5) {
                this.longitudCp = true;
            } else {
                this.longitudCp = false;
            }
            if (regex.test(input)) {
                this.tieneCaracteresCp = false;
            } else {
                this.tieneCaracteresCp = true;
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
                this.dateTest = true;
                return true;
            } else {
                this.dateTest = false;
                return false;
            }
        },
        testInputStreet(input) {
            let regex = /^[a-zA-Z0-9 ]*$/;
            if (input.length < 3) {
                this.longitudStreet = true;
            } else {
                this.longitudStreet = false;
            }
            if (regex.test(input)) {
                this.tieneCaracteresStreet = false;
            } else {
                this.tieneCaracteresStreet = true;
            }
        },

        testInputCity(input) {
            let regex = /^[a-zA-Z ]*$/;
            if (input.length < 3) {
                this.longitudCity = true;
            } else {
                this.longitudCity = false;
            }
            if (regex.test(input)) {
                this.tieneCaracteresCity = false;
            } else {
                this.tieneCaracteresCity = true;
            }
        },

        handleImageUpload(event) {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                // Check file size (3MB limit)
                const fileSizeInMB = selectedFile.size / (1024 * 1024);
                if (fileSizeInMB > 3) {
                    this.imageError = 'La imagen debe ser de máximo 3MB.';
                    this.image = null;
                } else {
                    this.imageError = null;
                    this.image = selectedFile;
                }
            }
        },

        checkForm: function (e) {
            if (this.nombre && this.apellidoPaterno && this.cp && this.date && this.numeroTelefono && this.correoElectronico) {
                return true;
            }

            this.errores = [];

            if (!this.nombre) {
                this.errores.push('El nombre es obligatorio.');
            }
            if (!this.apellidoPaterno) {
                this.errores.push('El apellido paterno es obligatorio.');
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
            } else {
                alert("Formulario enviado");
            }
            e.preventDefault();
        },

        validEmail: function (email) {
            var re = /([A-z]+@[A-z]{1,}\.[A-z]{1,})(\.[A-z]{1,})?/;
            if (!re.test(email)) {
                this.testEmail = true;
            } else {
                this.testEmail = false;
            }
            return re.test(email);
        },

    }
}
</script>
<style lang="">

</style>